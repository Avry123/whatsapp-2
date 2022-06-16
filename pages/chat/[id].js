import Head from "next/head";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components"
import ChatScreen from "../../components/ChatScreen";
import Sidebar from '../../components/Sidebar';
import { auth, db } from "../../firebase";
import getRecipientEmail from "../../utils/getRecipientEmail";

function ChatPost({chats, messages}) {
 
   const [user] = useAuthState(auth);
  return (
   <Container>
   <Head>
        <title>Chat with {getRecipientEmail(chats.users, user.email)} </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
     <Sidebar />
     <ChatContainer>
        <ChatScreen chat={chats} messages={messages} />
     </ChatContainer>
   </Container>
  )
}

export default ChatPost

export async function getServerSideProps(context) {
    const ref = db.collection("chats").doc(context.query.id);
  
    //Prep the messages on the server.
    const messagesRes = await ref.collection('messages').orderBy('timestamp', 'asc').get().catch(e => {console.log(e)});
  
    const messages = messagesRes.docs.map(doc => ({ 
      id: doc.id, 
      ...doc.data()
    })).map(messages => ({ 
      ...messages,
      timestamp: messages.timestamp.toDate().getTime()
    }));
  
    //Prep the chart
    const chatRes = await ref.get();
    const chat = {
      id: chatRes.id, 
      ...chatRes.data()
    }
  
    return {
      props: {
        messages: JSON.stringify(messages),
        chats: chat
      }
    }
  }

const Container = styled.div`
display: flex;
`;

const ChatContainer = styled.div`
flex: 1;
overflow: scroll;
height: 100vh;

::-webkit-scrollbar {
    display: none;
}

-ms-overflow-style: none;
scrollbar-width:none;
`;




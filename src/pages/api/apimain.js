import axios from 'axios';

export async function getChatUsersInfo(id) {
  try {
    const response = await axios.get(`http://localhost:3001/chatusersinfo?userid=${id}`);
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log('Error al recuperar los chats:', error);
    return null;
  }
}

export async function getMatchesUsersInfo(id) {
    try {
      const response = await axios.get(`http://localhost:3001/matches?userid=${id}`);
      const data = response.data;
      return data;
    } catch (error) {
      console.log('Error al recuperar los matches:', error);
      return null;
    }
  }

  export async function postUserAction(id, otherid, actiontype) {
    try {
      await axios.post(`http://localhost:3001/insertAccion?userid=${id}&otrousuario=${otherid}&tipoaccionid=${actiontype}`);
      return;
    } catch (error) {
      console.log('Error al enviar la acción:', error);
      return null;
    }
  }
  


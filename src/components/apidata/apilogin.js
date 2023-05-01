import React, { useState, useEffect } from 'react';
import axios from 'axios';




const login = async (state, email, password) => {
  try {

    const response = await axios.get(`http://localhost:3001/login?email=${email}&password=${password}`);
    state(response.data)
    console.log(response.data)
  } catch (error) {
    console.log('Error al iniciar sesión:', error);
  }
}

export {
  login
};
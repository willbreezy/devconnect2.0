/**
 La fonction formatDate que vous avez écrite utilise l'API Intl.DateTimeFormat pour formater une date en une chaîne lisible.
 */

function formatDate(date) {
    return new Intl.DateTimeFormat().format(new Date(date));
  }
  
  export default formatDate;
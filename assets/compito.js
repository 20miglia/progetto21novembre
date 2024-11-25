const marco = {
    name: "Marco",
    lastName: "Rossi",
    isAmbassador: true,
  }
  
  const paul = {
    name: "Paul",
    lastName: "Flynn",
    isAmbassador: false,
  }
  
  const amy = {
    name: "Amy",
    lastName: "Reed",
    isAmbassador: false,
  }
  
  const prices = [34, 5, 2]
  
  let totale = prices.reduce((total, item) => total + item, 0)
  
  const shippingCoast = 50
  
  let utenteCheEffettuaLAcquisto = marco
  
  let totalPrices 
  
  for(let proprietà in utenteCheEffettuaLAcquisto){
    console.log(utenteCheEffettuaLAcquisto[proprietà])
  }
  
  
  if(utenteCheEffettuaLAcquisto.isAmbassador){
    totalPrices = totale - (totale*30)/100 + shippingCoast
    if(totalPrices > 100){
      totalPrices = totale - (totale*30)/100
    }
    console.log("L'utente è ambasciatore e il suo carrello ha un totale di" + ":" + " " + totalPrices)
  } else {
    totalPrices = totale + shippingCoast
    if(totalPrices > 100){
    totalPrices = totale
    }
    console.log("L'utente non è ambasciatore e il suo carrello ha un totale di" + ":" + " " + totalPrices)
  }
  
  
  let utenti = []
  utenti.push(marco, paul, amy)
  
  
  for(let element of utenti){
    if(element.isAmbassador){
      console.log(element.name + " " + element.lastName + " è un Ambassador")
    } else{
      console.log(element.name + " " + element.lastName + " non è un Ambassador")
    }
  }
  
  let ambassadors = []
  
  for(let element of utenti){
    if(element.isAmbassador){
     ambassadors.push(element.name + element.lastName) 
    } 
    console.log(ambassadors)
  }
  
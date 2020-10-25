//////////////////////////////////////////// Importy /////////////////////////////////////
function range(start, end) {
    return Array(end - start + 1)
      .fill()
      .map((_, idx) => start + idx);
  }
  const k10 = range(1, 10);
  const k100 = range(1, 100);

function randomiser(props) {
    let range; 
    let data = []; 
    if (Array.isArray(props)) {
      data = props;
      range = data.length;   
      return data[Math.round(Math.random() * (range - 1))];
    }
    for (const [key] of Object.entries(props)) {
      data.push(key);
    }
    range = data.length;
    const randomNumber = Math.round(Math.random() * (range - 1)); 
    const keyToReturn = data[randomNumber];
    return props[keyToReturn];
  }
/////////////////////////////////////////////////Dane/////////////////////////////////
let postac = {
    imie: '',   
    rasa: '',
    profesja: '',
    klasa: '',
    staty: {
        WW: 0,
        US: 0,
        S: 0,
        Wt: 0,
        I: 0,
        Zw: 0,
        Zr: 0,
        Int: 0,
        SW: 0,
        Ogd: 0,
    },
    umiejetnosci: '',
}
const profesjaDoLosowania = {
    wojownik:{
      nazwa: "wojownik1",
      klasa: "wojowniczy",
      umiejetnosci: {
            walenie: {
              cecha: "WW",
              wartoscCechy: postac.staty.WW,
              rozwiniecia: 0,
              },
      }
    }
}
function rasa (rzutRasa){
    if(rzutRasa && rzutRasa <= 90){
        return "czlowiek";
    }else if(rzutRasa && rzutRasa <= 95){
        return "niziolek";
    }else {
        
    };
}
function staty (rzutRasa){
    let wylosowaneStaty
        switch (rzutRasa) {
            case "czlowiek":
                wylosowaneStaty = {
                    WW: randomiser(k10)+randomiser(k10)+20,
                    US: randomiser(k10)+randomiser(k10)+20,
                    S: randomiser(k10)+randomiser(k10)+20,
                    Wt: randomiser(k10)+randomiser(k10)+20,
                    I: randomiser(k10)+randomiser(k10)+20,
                    Zw: randomiser(k10)+randomiser(k10)+20,
                    Zr: randomiser(k10)+randomiser(k10)+20,  
                    Int: randomiser(k10)+randomiser(k10)+20,
                    SW: randomiser(k10)+randomiser(k10)+20,
                    Ogd: randomiser(k10)+randomiser(k10)+20,
                } 
                break;
            
            case "niziolek":
                wylosowaneStaty = {
                    WW: randomiser(k10)+randomiser(k10)+10,
                    US: randomiser(k10)+randomiser(k10)+30,
                    S: randomiser(k10)+randomiser(k10)+10,
                    Wt: randomiser(k10)+randomiser(k10)+20,
                    I: randomiser(k10)+randomiser(k10)+20,
                    Zw: randomiser(k10)+randomiser(k10)+20,
                    Zr: randomiser(k10)+randomiser(k10)+20 ,  
                    Int: randomiser(k10)+randomiser(k10)+20,
                    SW: randomiser(k10)+randomiser(k10)+20,
                    Ogd: randomiser(k10)+randomiser(k10)+20,
                    } 
                break;
            
        }
    return wylosowaneStaty;
}   
function profka (rzutRasa){
    let profesjaWylosowana
    let zwrotProfesja
    switch (rzutRasa){
            case "czlowiek":
            profesjaWylosowana = randomiser(profesjaDoLosowania)
            
            zwrotProfesja = {
                
                nazwa: profesjaWylosowana.nazwa,
                klasa: profesjaWylosowana.klasa,
                umiejetnosci: profesjaWylosowana.umiejetnosci
                
                  
            }

    }
    return zwrotProfesja;
}  
    
let rasaWylosowana =rasa(randomiser(k100))
let statyWylosowane =staty(rasaWylosowana)
let profesjaWylosowana = profka(rasaWylosowana)
postac = {
    ...postac,
    staty: statyWylosowane, 
    profesja: profesjaWylosowana.nazwa,
    klasa: profesjaWylosowana.klasa,
    rasa: rasaWylosowana,
    
}
function dodajStaty() {
    postac = {
        ...postac,
        umiejetnosci: profesjaWylosowana.umiejetnosci,
    
    }   
};

function verificarCerimonias() {
    const age = parseInt(document.getElementById("age").value);
    const lastCeremony = parseInt(document.getElementById("lastCeremony").value);
    const currentCeremony = document.getElementById("currentCeremony").value;
    let possibleCeremonies = "";
  
    switch (currentCeremony) {
      case "Nobre Cavaleiro":
        if (age >= 16 && lastCeremony >= 6) {
          possibleCeremonies = "Você está apto para participar da cerimônia: Cavaleiro da Capela.";
        } else {
          possibleCeremonies = "Você ainda não atingiu as condições necessárias para participar de outras cerimônias.";
        }
        break;
        case "Cavaleiro da Capela":
            if (age >= 18 || lastCeremony >= 6) {
              possibleCeremonies = "Você está apto para participar da cerimônia: Cavaleiro da Cruz de Salém.";
            } else {
              possibleCeremonies = "Você ainda não atingiu as condições necessárias para participar de outras cerimônias.";
            }
            break;
      case "Cavaleiro da Cruz de Salém":
        if (age >= 18 || lastCeremony >= 6) {
          possibleCeremonies = "Você está apto para participar da cerimônia: Cavaleiro Ex-Templário.";
        } else {
          possibleCeremonies = "Você ainda não atingiu as condições necessárias para participar de outras cerimônias.";
        }
        break;
      case "Cavaleiro Ex-Templário":
        if (age >= 18 || lastCeremony >= 6) {
          possibleCeremonies = "Você está apto para participar da cerimônia: Cavaleiro da Tríade.";
        } else {
          possibleCeremonies = "Você ainda não atingiu as condições necessárias para participar de outras cerimônias.";
        }
        break;
      case "Cavaleiro da Tríade":
        if (age >= 19 || lastCeremony >= 6) {
          possibleCeremonies = "Você está apto para participar da cerimônia: Cavaleiro do Ébano.";
        } else {
          possibleCeremonies = "Você ainda não atingiu as condições necessárias para participar de outras cerimônias.";
        }
        break;
      case "Cavaleiro do Ébano":
        if (age >= 19 || lastCeremony >= 6) {
          possibleCeremonies = "Você está apto para participar da cerimônia: Cavaleiro Anon.";
        } else {
          possibleCeremonies = "Você ainda não atingiu as condições necessárias para participar de outras cerimônias.";
        }
        break;
      case "Cavaleiro Anon":
        if (age >= 20 || lastCeremony >= 6) {
          possibleCeremonies = "Você está apto para participar da cerimônia: Cavaleiro da Cadência.";
        } else {
          possibleCeremonies = "Você ainda não atingiu as condições necessárias para participar de outras cerimônias.";
        }
        break;
      default:
        possibleCeremonies = "Parabéns pela sua jornada Sir Cavaleiro.";
        break;
    }
  
    document.getElementById("possibleCeremonies").innerHTML = possibleCeremonies;
  }
  
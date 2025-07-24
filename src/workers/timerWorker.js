self.onmessage = (event) => {
  console.log("WORKER recebeu: ", event.data);

  switch (event.data) {
    case "FAVOR": {
      self.postMessage("Posso fazer um favor.");
      break;
    }
    case "FALA_OI": {
      self.postMessage("Ok: oi!");
      break;
    }
    case "FECHAR": {
      self.postMessage("Vou fechar.");
      self.close();
      break;
    }
    default: {
      self.postMessage("Não entendi.");
    }
  }
};

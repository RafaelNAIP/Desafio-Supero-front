import logo from './logo.svg';
import './App.style.js';
import { ClientInformation, ClientInformationContainer, ClientInformationText, Filter, FilterButton, FilterButtonImage, FilterContainer, Header } from './App.style.js';
import glass from './images/glass.png'
import { api } from './service/api';
import { useEffect, useRef, useState } from 'react';
import { ClientEditModal } from './ClientEditModal';
import { Button, Form } from 'react-bootstrap';

function App() {
  const [clients, setClients] = useState([])

  const modalRef = useRef()

  async function handleClients() {
    const clients = await api.get('/clients')
    setClients(clients.data)
  }

  useEffect(() => {
    handleClients()
  }, [])

  async function handleDeleteClient(id) {
    const clients = await api.delete(`/clients/${id}`)
    console.log(clients)
  }

  async function handleFilter(contractSituation) {
    console.log(contractSituation)
    const params = {

    }
    if(contractSituation !== "Qualquer tipo de contrato..."){
      params.contractSituation = contractSituation
    }
    const filtredClients = await api.get(`/clients`, {params})
    console.log(filtredClients)
    setClients(filtredClients.data)
  }


  return (
    <>
      <Header>
        <ClientEditModal ref={modalRef} />
      </Header>
      <FilterContainer>
        <Form.Select style={{ width: "20%" }} onClick={(e) => handleFilter(e.target.value)}>
          <option>Qualquer tipo de contrato...</option>
          <option value="Em Atraso">Em Atraso</option>
          <option value="Dentro do Prazo">Dentro do Prazo</option>
          <option value="Pago">Pago</option>
        </Form.Select>
      </FilterContainer>
      <ClientInformationContainer>
        {clients.map((client) => {
          return (
              <ClientInformation>
                <ClientInformationText>Nome: {client.name}</ClientInformationText>
                <ClientInformationText>CPF: {client.cpf}</ClientInformationText>
                <ClientInformationText>Telefone: {client.celphone}</ClientInformationText>
                <ClientInformationText>Numero do contrato: {client.contractNumber}</ClientInformationText>
                <ClientInformationText>Data do contrato: {client.contractDate}</ClientInformationText>
                <ClientInformationText>Valor do contrato: {client.contractValue}</ClientInformationText>
                <ClientInformationText>Situação do contrato: {client.contractSituation}</ClientInformationText>
                <ClientInformationText>Ação: {client.action}</ClientInformationText>
                <Button variant="secondary" onClick={() => handleDeleteClient(client._id)}>
                  Deletar
                </Button>
              </ClientInformation>
          )
        })}
      </ClientInformationContainer>
    </>

  );
}

export default App;

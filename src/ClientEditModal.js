import { Button, Form, Modal } from "react-bootstrap";
import { forwardRef, useImperativeHandle, useState } from "react"
import { ClientModalInput } from "./ClientEditModal.style";
import { api } from "./service/api";
import { FilterContainer } from "./App.style";

export const ClientEditModal = forwardRef(
    (_, ref) => {
        const [show, setShow] = useState(false);


        const [name, setName] = useState('')
        const [cpf, setCpf] = useState('')
        const [celphone, setCelphone] = useState('')
        const [contractNumber, setContractNumber] = useState('')
        const [contractDate, setContractDate] = useState('')
        const [contractValue, setContractValue] = useState('')
        const [contractSituation, setContractSituation] = useState('')
        const [action, setAction] = useState('')


        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        useImperativeHandle(ref, () => ({
            open: handleShow,
            close: handleClose
        }))

        async function handleCreateClient() {
            console.log(contractSituation)
            const createClient = await api.post('/clients', {
                name,
                cpf,
                celphone,
                contractNumber: Number(contractNumber),
                contractDate,
                contractValue: Number(contractValue),
                contractSituation,
                action
            })
            handleClose()
        }

        return (
            <>
                <Button variant="primary" onClick={handleShow}>
                    Criar Novo Usuário
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ClientModalInput placeholder={"Nome"} onChange={(e) => (setName(e.target.value))} />
                        <ClientModalInput placeholder={"CPF"} onChange={(e) => (setCpf(e.target.value))} />
                        <ClientModalInput placeholder={"Telefone"} onChange={(e) => (setCelphone(e.target.value))} />
                        <ClientModalInput placeholder={"Numero do contrato"} onChange={(e) => (setContractNumber(e.target.value))} />
                        <ClientModalInput placeholder={"Data do contrato"} onChange={(e) => (setContractDate(e.target.value))} />
                        <ClientModalInput placeholder={"Valor do contrato"} onChange={(e) => (setContractValue(e.target.value))} />
                        <FilterContainer>
                            <Form.Select style={{ width: "50%" }} onClick={(e) => setContractSituation(e.target.value)}>
                                <option>Situação do contrato</option>
                                <option value="Em Atraso">Em Atraso</option>
                                <option value="Dentro do Prazo">Dentro do Prazo</option>
                                <option value="Pago">Pago</option>
                            </Form.Select>
                        </FilterContainer>
                        <FilterContainer>
                            <Form.Select style={{ width: "50%" }} onClick={(e) => (setAction(e.target.value))} >
                                <option>Ação</option>
                                <option value="Cobrar">Cobrar</option>
                                <option value="Agradecer Pagamento">Agradecer Pagamento</option>
                                <option value="Cancelar Contrato">Cancelar Contrato</option>
                            </Form.Select>
                        </FilterContainer>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Fechar
                        </Button>
                        <Button variant="primary" onClick={handleCreateClient}>
                            Salvar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
) 

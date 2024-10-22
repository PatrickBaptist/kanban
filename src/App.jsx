import './App.css'
import CardColumn from './cardsColumn/cardsColumn'

function App() {

  return (
    <>
      <main className="kanban">
        
        <CardColumn
            content={"Pendente"}
            priority={"Alta prioridade"}
            review={"Revisar documento do projeto"}
            colorPriority={"high"}
            data={"1"}
        />

        <CardColumn
            content={"Em Front-End"}
            priority={"Alta prioridade"}
            review={"Revisar documento do projeto"}
            colorPriority={"high"}
            data={"2"}
        />
        
        <CardColumn
            content={"Em Back-End"}
            priority={"Alta prioridade"}
            review={"Revisar documento do projeto"}
            colorPriority={"medium"}
            data={"3"}
        />

        <CardColumn
            content={"Em Teste"}
            priority={"Alta prioridade"}
            review={"Revisar documento do projeto"}
            colorPriority={"high"}
            data={"4"}
        />

        <CardColumn
            content={"Concluído"}
            priority={"Alta prioridade"}
            review={"Revisar documento do projeto"}
            colorPriority={"low"}
            data={"5"}
        />

    </main>
  </>
  )
}

export default App

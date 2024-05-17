
import './scss/app.scss'
import dolls from './assets/dolls.json'
import Header from './components/Header'
import Categories from './components/Categories'
import Sort from './components/Sort'
import DollsBlock from './components/DollsBlock'
function App() {
  console.log(dolls)
  

  return (
    <>
    <div className="wrapper">
    <Header></Header>
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories></Categories>
            <Sort></Sort>
          </div>
          <h2 className="content__title">All dolls</h2>
          <div className="content__items">
           {dolls.map((obj)=> (
            <DollsBlock key={obj.id} {...obj}></DollsBlock>
           ))}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App

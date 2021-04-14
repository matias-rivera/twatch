import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import StreamCreate from './streams/StreamCreate'
import StreamEdit from './streams/StreamEdit'
import StreamDelete from './streams/StreamDelete'
import StreamShow from './streams/StreamShow'
import StreamList from './streams/StreamList'
import Header from './Header'

const App = () => {
    return ( 
        <>
            <Router>
                <div>
                    <Header />
                    <Route path="/streams/new" component={StreamCreate}/>
                    <Route path="/streams/delete" component={StreamDelete}/>
                    <Route path="/streams/edit" component={StreamEdit}/>
                    <Route path="/streams/show" component={StreamShow}/>
                    <Route path="/" exact component={StreamList}/>
                </div>
            </Router>
        </>
     );
}
 
export default App;
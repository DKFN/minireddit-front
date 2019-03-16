/* tslint:disable */

import * as React from 'react';
import './App.css';

import {Post} from "./component/Post";

class App extends React.Component {


  public render() {
    return (
        <div className="App">
          <Post idPost={1}/>
        </div>
	<form>
		<text>{`Name\n`}</text>
		<label>
			<input type="text" name="name" style={{ height : 200}}/>
		</label>
		<input type="submit" name="Submit"/>
	</form>
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react'
import './home.scss'
import BoilingVerdict from '../../components/geet/greet'
class Home extends Component{

    state = {
        username:'lisig',
        age:18,
        isToggleOn:true,
        count:'',
        numbers:[1, 2, 3, 4, 5],
        value:'',
        value1:'',
        temperature:'120'
    }
    changeAge(id){
        console.log(id)
        this.setState((state)=>({
            age:state.age*1+1
        }))
    }
    handleClick = () => {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }
    deleteRow(count){
        console.log(count)
        this.setState({ count })
    }
    handleSubmit=(event)=>{
        console.log('提交的名字: ' + this.state.value);
        console.log('提交的风味: ' + this.state.value1);
        event.preventDefault();
    }
    handleChange=(event)=>{
        this.setState({value: event.target.value});
    }
    handleChange1=(event)=>{      
        this.setState({
            value1: event.target.value
        });
    }
    changeTemper=(e)=>{
        this.setState({temperature: e.target.value});
    }
    render(){
        const temperature = this.state.temperature;
        return(
            <div className='home'>
                姓名：<span className='items'>{this.state.username}</span>
                年龄：<span className='items'>{this.state.age}</span>
                <button className='btn' onClick={this.changeAge.bind(this,'10')}>add</button>
                <button  className='btn' onClick={this.handleClick}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
                <button  className='btn' onClick={()=>this.deleteRow(12)}>事件传参{this.state.count}</button>
                <ul>{this.state.numbers.map((number) =>
                    <li key={number.toString()}>{number}</li>
                )}</ul>
                <input value={temperature} onChange={this.changeTemper} />
                <BoilingVerdict celsius={parseFloat(temperature)} />

                <form onSubmit={this.handleSubmit}>
                    <label>
                        名字:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <br/>
                    <label>
                        选择你喜欢的风味:
                        <select value={this.state.value1} onChange={this.handleChange1}>
                            <option value="grapefruit">葡萄柚</option>
                            <option value="lime">酸橙</option>
                            <option value="coconut">椰子</option>
                            <option value="mango">芒果</option>
                        </select>
                    </label>
                    <br/>
                    <input type="submit" value="提交" />
                </form>

            </div>
        )
    }

}
export default Home
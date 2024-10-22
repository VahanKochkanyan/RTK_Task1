import { useDispatch, useSelector } from "react-redux"
import { Delete, SalaryDown, SalaryUp, SwipeDown, SwipeUp } from "./users.slice"


export const Users =  () => {

    const users = useSelector(state => state.items)
    
    const dispatch = useDispatch()


    return <>
        <h1>Users</h1>
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>gender</th>
                        <th>salary</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => 
                            <tr key={user.id}> 
                                <td>{user.name}</td>
                                <td>{user.gender}</td>
                                <td>{user.salary}</td>
                                <td>
                                    <button onClick={ () => dispatch(SalaryUp(user.id)) }>+</button>
                                    <button onClick={ () => dispatch(SalaryDown(user.id)) }>-</button>
                                    <button onClick={ () => dispatch(Delete(user.id)) }>x</button>
                                    <button onClick={ () => dispatch(SwipeUp(user.id)) }>^</button>
                                    <button onClick={ () => dispatch(SwipeDown(user.id)) }>v</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
    </>
}
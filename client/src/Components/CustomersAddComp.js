import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { addCustomer } from '../API';


function CustomersAddComp() {

    const navigate = useNavigate();

    const [firstname, setFirstName] = useState("");
    const [lastname, setLastname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");


    const processCustomers = () => {
        console.log(firstname);
        let obj = {
            Firstname: firstname,
            Lastname: lastname,
            phone: phone,
            email: email,
            address: { address: address },


        }
        addCustomer(obj).then(result => navigate("/customers"));
        // axios.post("http://localhost:5000/customers/addCustomer", obj)
        //     .then(response => {
        //         if (response.data === "Customer Added Successfully!") {
        //             alert(response.data);
        //             navigate("/customer");
        //         } else alert(response.data);
        //     });
    }
    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <td>FirstName:</td>
                        <td><input type='text' onChange={(e) => setFirstName(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Lastname:</td>
                        <td><input type='text' onChange={(e) => setLastname(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>E-mail:</td>
                        <td><input type='text' onChange={(e) => setEmail(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Phone:</td>
                        <td><input type='text' onChange={(e) => setPhone(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Address:</td>
                        <td><input type='text' onChange={(e) => setAddress(e.target.value)} /></td>
                    </tr>

                    <tr>
                        <td colSpan={2}><button onClick={processCustomers}>Add Customer</button></td>
                    </tr>
                </tbody>
            </table>
        </>
    )

}





export default CustomersAddComp;
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { getCustomers, updateCustomer } from "../API";

function CustomersEditComp() {

    const q = useParams();



    const navigate = useNavigate();


    const [firstname, setFirstName] = useState("");
    const [lastname, setlastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");


    useEffect(() => {
        // firstname: firstname,
        let obj = {
            id: q.id,
        }
        // axios.post("http://localhost:5000/customer/showCustomer", obj)
        //     .then(response => {
        //         if (response.data) {
        //             setFirstName(response.data[0].firstname);
        //             setlastName(response.data[0].lastname);
        //             setPhone(response.data[0].phone);
        //         }
        //     });
        getCustomers().then((res) => {

            let output = res.users.filter(value => value.id === parseInt(q.id));
            console.log(output);
            if (output) {
                setFirstName(output[0].firstName);
                setlastName(output[0].lastName);
                setPhone(output[0].phone);
                setEmail(output[0].email);
                setAddress(output[0].address.address);
            }

        });
    }, [q.id]);

    const processCustomers = () => {
        let obj = {
            id: q.id,
            firstname: firstname,
            lastname: lastname,
            phone: phone,
            email: email,
            address: { address: address },

        }
        updateCustomer(obj).then(result => console.log(result));
        //     axios.put("http://localhost:5000/customers/updateCustomer", obj)
        //         .then(response => {
        //             if (response.data === "Customer Updated Successfully!") {
        //                 alert(response.data);
        //                 navigate("/customer");
        //             } else alert(response.data);
        //         });
    }
    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <td>FirstName:</td>
                        <td><input type='text' value={firstname} onChange={(e) => setFirstName(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Lastname:</td>
                        <td><input type='text' value={lastname} onChange={(e) => setlastName(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Phone:</td>
                        <td><input type='text' value={phone} onChange={(e) => setPhone(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td><input type='text' value={email} onChange={(e) => setEmail(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Address:</td>
                        <td><input type='text' value={address} onChange={(e) => setAddress(e.target.value)} /></td>
                    </tr>

                    <tr>
                        <td colSpan={2}><button onClick={processCustomers}>Edit Customers</button></td>
                    </tr>
                </tbody>
            </table>
        </>
    )

}

export default CustomersEditComp;
import { Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getCustomers } from "../../API";
import { useNavigate } from "react-router-dom";



function Customers() {
    const [loading, setLoading] = useState(false);
    const [dataSource, setDataSource] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        getCustomers().then((res) => {
            setDataSource(res.users);
            console.log(res.users);
            setLoading(false);
        });
    }, []);

    return (
        <Space size={20} direction="vertical">
            <Typography.Title level={4}>Customers</Typography.Title>
            <p>
                <button onClick={() => navigate('/customer/add/')}>Add Customers</button>
            </p>
            <Table
                loading={loading}
                columns={[

                    {
                        title: "First Name",
                        dataIndex: "firstName",
                    },
                    {
                        title: "LastName",
                        dataIndex: "lastName",
                    },
                    {
                        title: "Email",
                        dataIndex: "email",
                    },
                    {
                        title: "Phone",
                        dataIndex: "phone",
                    },

                    {
                        title: "address",
                        dataIndex: "address",
                        render: (address) => {
                            return (
                                <span>
                                    {address.address}, {address.city}
                                </span>
                            );
                        },
                    },
                    {
                        title: "Actions",
                        dataIndex: "id",
                        render: (id) => {
                            return (
                                <span>
                                    <a href={`/customer/edit/${id}`}>Edit</a> / <a href="/customer/delete">Delete</a>
                                </span>

                            )
                        }
                    }
                ]}
                dataSource={dataSource}
                pagination={{
                    pageSize: 5,
                }}
            ></Table >
        </Space >


    );
}

export default Customers;
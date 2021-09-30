import { useState, useEffect } from "react"
import axios from "axios";
import SKDetailModal from "./SKDetailModal";

const SKList = () => {
    const [suratKeluar, setSK] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [skId, setSkId] = useState('');

    useEffect(() => {
        getSKList();
    }, [])

    const getSKList = async () => {
        const response = await axios.get('http://localhost:3000/suratkeluar');
        setSK(response.data);
    }

    const showDetail = (id) => {
        setShowModal(prev => !prev);
        setSkId(id);
    }

    return (
        <div className="container mt-3">
            <h1 className="title is-1">Surat Keluar</h1>
            {
                suratKeluar.map((sk, index) => (
                    <div className="box has-background-info-light" onClick = {() => showDetail(sk._id)} key = {sk._id}>
                        <div className="columns">
                          <div className="column is-1">
                            <h3 className="has-text-weight-bold is-size-4">{ index + 1 }</h3>
                          </div>
                          <div className="column">
                            <h5 className="has-text-weight-bold is-size-4">{ sk.nomor }</h5>
                          </div>
                          <div className="column">
                              <div className="tags is-justify-content-flex-end mt-1">
                                <span className="tag is-info">
                                    <span className="icon-text">
                                        <span className="icon">
                                            <i className="fas fa-calendar-day"></i>
                                        </span>
                                        <span>
                                            { new Date(sk.tanggal).toDateString() }
                                        </span>
                                    </span>
                                </span>
                              </div>
                          </div>
                        </div>
                    </div>
                ))
            }

            <SKDetailModal showModal = {showModal} setShowModal = {setShowModal} id = {skId}/>
        </div>
    )
}

export default SKList;

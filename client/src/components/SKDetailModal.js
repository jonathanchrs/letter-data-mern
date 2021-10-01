import axios from 'axios'
import { useState, useEffect } from 'react';
import React from 'react'

const SKDetailModal = ({ showModal, setShowModal, id }) => {
    const [suratKeluar, setSk] = useState(null);

    useEffect(() => {
        sk();
    })

    const sk = async () => {
        const response = await axios.get(`http://localhost:3000/suratkeluar/${id}`);
        setSk(response.data)
    } 

    return ( 
        <>
        { 
            showModal ? (
                <div className="modal is-active">
                    <div className="modal-background"></div>
                    <div className="modal-content">
                        {
                            <div className="box">
                                <h1 className="has-text-weight-bold is-size-3">{ suratKeluar.nomor }</h1>
                                <h1>
                                    <div className="tags mt-2">
                                        <div className="tag is-info is-size-6">
                                            Tanggal
                                        </div>
                                        <div className="tag has-text-weight-bold is-size-6">
                                            { new Date(suratKeluar.tanggal).toDateString() }    
                                        </div>
                                    </div>
                                </h1>
                                <h1>
                                    <div className="tags mt-2">
                                        <div className="tag is-info is-size-6">
                                            Keterangan
                                        </div>
                                        <div className="tag has-text-weight-bold is-size-6">
                                            { suratKeluar.keterangan }    
                                        </div>
                                    </div>
                                </h1>
                                <h1>
                                    <div className="tags mt-2">
                                        <div className="tag is-info is-size-6">
                                            Kepada
                                        </div>
                                        <div className="tag has-text-weight-bold is-size-6">
                                            { suratKeluar.kepada }    
                                        </div>
                                    </div>
                                </h1>
                            </div>
                        }
                    </div>
                    <button className="modal-close is-large" aria-label="close" onClick = {() => setShowModal(prev => !prev)}></button>
                </div>
            ) : null 
        }
        </>
    )
}

export default SKDetailModal

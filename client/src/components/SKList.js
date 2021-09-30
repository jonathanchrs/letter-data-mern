import { useState, useEffect } from "react"
import axios from "axios";

const SKList = () => {
    const [suratKeluar, setSK] = useState([]);

    useEffect(() => {
        getSKList();
    }, [])

    const getSKList = async () => {
        const response = await axios.get('http://localhost:3000/suratkeluar');
        setSK(response.data);
    }

    return (
        <div className="container mt-3">
            <h1 className="title is-1">Surat Keluar</h1>
            {
                suratKeluar.map((sk, index) => (
                    <div className="box has-background-info-light">
                        <div class="columns">
                          <div class="column is-1">
                            <h3 className="has-text-weight-bold is-size-4">{ index + 1 }</h3>
                          </div>
                          <div class="column">
                            <h5 className="has-text-weight-bold is-size-4">{ sk.nomor }</h5>
                            <h5 className="has-text-weight-light">{ sk.keterangan }</h5>
                          </div>
                          <div class="column">
                              <div className="tags is-justify-content-right">
                                <span className="tag is-info">
                                    <span class="icon-text">
                                        <span class="icon">
                                            <i class="fas fa-calendar-day"></i>
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
        </div>
    )
}

export default SKList;

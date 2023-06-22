import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, Input, Table } from 'react-bootstrap';
import RegistrarAuto from "./RegistrarAuto";
import React, { useEffect, useState } from 'react';
import { Autos, AutosVendidos, GuardarAuto, Marca, ObtenerAuto } from "../hooks/Conexion";
import { borrarSesion, getToken } from "../utilidades/Sessionutil";
import mensajes from "../utilidades/Mensajes";
import { useNavigate } from "react-router";
import EditarAuto from "./EditarAuto";
import { useForm } from "react-hook-form";
const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

export const PresentarAutosVendidos = () => {

    //CONSTANTES PARA LLAMAR UNA VEZ AL SERVIDOR
    const [llautos, setLlautos] = useState(false);

    //DATOS
    const [data, setData] = useState([]);

    const navegation = useNavigate();

    if (!llautos) {
        AutosVendidos(getToken()).then((info) => {
            if (info.code !== 200 && info.msg == 'Acceso denegado. Token a expirado') {
                borrarSesion();
                mensajes(info.mensajes);
                navegation("/sesion")
            } else {
                setData(info.info);
                setLlautos(true);
            }
        })
    }

    return (

        <div className="container">
            <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
                <div className="row ">

                    <div className="col-sm-3 mt-5 mb-4 text-gred">
                        <div className="search">
                            <form className="form-inline">
                                <input className="form-control mr-sm-2" type="search" placeholder="Buscar auto" aria-label="Search" />

                            </form>
                        </div>
                    </div>
                    <div className="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred" style={{ color: "blue" }}><h2><b>Autos Vendidos</b></h2></div>
                </div>
                <div className="row">

                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Modelo</th>
                                <th>Año</th>
                                <th>Kilometraje</th>
                                <th>Color</th>
                                <th>Placa</th>
                                <th>Precio</th>
                                <th>Dueño</th>
                                <th>Apellidos</th>
                                <th>Nombres</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((auto) => (
                                <tr key={auto.id}>
                                    <td>{auto.modelo}</td>
                                    <td>{auto.anioFabricacion}</td>
                                    <td>{auto.kilometraje}</td>
                                    <td>{auto.color}</td>
                                    <td>{auto.placa}</td>
                                    <td>{auto.precio}</td>
                                    <td>{auto.identificacion}</td>
                                    <td>{auto.apellidos}</td>
                                    <td>{auto.nombres}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>

            </div>
        </div>
    );

}

export default PresentarAutosVendidos;

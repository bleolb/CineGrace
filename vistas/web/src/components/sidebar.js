/* eslint-disable jsx-a11y/anchor-is-valid */
import React from'react';
import { Link } from "react-router-dom";

const Sidebar = () => (
   
        
        
    

<div className="flex-grow flex mr-2 ml-64" > 

    <l1>CINE LORD</l1>
                    <li className="items-center">
                        <p className="text-gray-900 text-xs uppercase py-3 font-bold block italic">
                            <i className=" mr-2 text-sm"></i>
                            Películas
                        </p>
                        <ul>
                            <Link to="/add_movie">
                                <li className="mx-8 text-black-600 hover:text-black-900 ">
                                    <i className="fas fa-arrow-circle-right"></i>
                                    Crear Película
                                </li>
                            </Link>
                        
                        
                            <Link to="/movies">
                                <li className="mx-8 text-black-600 hover:text-black-900 font-sans">
                                    <i className="fas fa-arrow-circle-right"></i>
                                    Catálogo
                                </li>
                            </Link>
                        </ul>
                    </li>
                    
                    
                    <li className="items-center">
                        <p className="text-black-900 text-xs uppercase py-3 font-bold block italic">
                            <i className="far fa-plus-square mr-2 text-m"></i>
                            Crear y Asignar
                        </p>
                        <ul>
                            <Link to="/rooms">
                                <li className="mx-8 text-black-600 hover:text-black-900">
                                    <i className="fas fa-arrow-circle-right"></i>
                                    Crear Salas
                                </li>
                            </Link>
                        
                            <Link to="/schedules">
                                <li className="mx-8 text-black-600 hover:text-black-900">
                                    <i className="fas fa-arrow-circle-right"></i>
                                    Crear Horarios
                                </li>
                            </Link>
                       
                            <Link to="/films_room">
                                <li className="mx-8 text-black-600 hover:text-black-900">
                                    <i className="fas fa-arrow-circle-right"></i>
                                    Asignar Peliculas
                                </li>
                            </Link>
                        </ul>
                    </li>
</div>


                
)

export default Sidebar;
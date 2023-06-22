const URL = "http://localhost/v1/index.php"
const URLN = "http://localhost:3006/api"
export const InicioSesion = async (data) => {
    const cabeceras = {
        "Accept": 'aplication/json',
        "Content-Type": 'application/json'
    };
    const datos = await (await fetch(URLN + "/sesion", {
        method: "POST",
        headers: cabeceras,
        body: JSON.stringify(data)
    })).json();
    //console.log("DATOS"+JSON.stringify(data));
    return datos;
}

export const Marca = async (key) => {
    const cabeceras = { "X-API-TOKEN": key };
    const datos = await (await fetch(URLN + "/marcas/listar", {
        method: "GET",
        headers: cabeceras
    })).json();
    return datos;
}

export const AutosCant = async (key) => {
    var cabeceras = { "X-API-TOKEN": key };
    const datos = await (await fetch(URLN + "/autos/cantidadautos", {
        method: "GET",
        headers: cabeceras
    })).json();
    return datos;
}

export const AutosCantDisp = async (key) => {
    var cabeceras = { "X-API-TOKEN": key };
    const datos = await (await fetch(URLN + "/autos/cantidadautosdisp", {
        method: "GET",
        headers: cabeceras
    })).json();
    return datos;
}

export const MarcasCant = async (key) => {
    var cabeceras = { "X-API-TOKEN": key };
    const datos = await (await fetch(URLN + "/marcas/cantidadmarcas", {
        method: "GET",
        headers: cabeceras
    })).json();
    return datos;
}

export const Autos = async (key) => {
    const cabeceras={
        "X-API-TOKEN":key
    };
    const datos = await (await fetch(URLN + "/autos/listar/disponibles",  {
        method: "GET",
        headers: cabeceras
    })).json();
    return datos;
}

export const AutosVendidos = async (key) => {
    const cabeceras={
        "X-API-TOKEN":key
    };
    const datos = await (await fetch(URLN + "/autos/listar/vendidos",  {
        method: "GET",
        headers: cabeceras
    })).json();
    console.log("DATOS QUE TRAE", JSON.stringify(datos));
    return datos;
}

export const GuardarAuto = async (data, key) => {
    const headers = {
        "Content-Type": "application/json",
        "X-API-TOKEN": key
    };
    const datos = await (await fetch(URLN + "/autos/guardar", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data)
    })).json();
    //console.log("GUARDAR", JSON.stringify(data));
    return datos;
}

export const ActualizarAuto = async (data, key) => {
    
    const headers = {
        "Content-Type": "application/json",
        "X-API-TOKEN": key
    };
    
    const datos = await (await fetch(URLN + "/autos/modificar", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data)
    })).json();
    //console.log("TOY AQUI", datos);
    //console.log("GUARDAR", JSON.stringify(data));
    return datos;
}

export const ObtenerAuto = async (id, key) => {
    var cabeceras = { "X-API-TOKEN": key };
    const datos = await (await fetch(`${URLN}/autos/obtener/${id}`, {
        method: "GET",
        headers: cabeceras
    })).json();
    //console.log("DATOS QUE TRAE", JSON.stringify(datos));
    return datos;
} 

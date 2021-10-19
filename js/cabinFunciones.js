function postCabin (){
    var data={
        id:$("#myId").val(),
        brand:$("#brand").val(),
        rooms:$("#rooms").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    }
//var dataTosend =JSON.stringify(data);

$.ajax({

            dataType: "json",
            data:data,
            url:"https://g61be72711c796d-db202109261839.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/cabin/cabin",
            type:"POST",
            success: function(response){
                console.log(response);
            },
            error: function(jqXHR, textStatus, errorThrown){

            }
});
}

function getCabin (){
    
    $.ajax({

        dataType: "json",
        url:"https://g61be72711c796d-db202109261839.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/cabin/cabin",
        type:"GET",
        success: function(response){
            
            for (i = 0; i< response.items.length; i++){
                $("#items").append("<tr>");
                $("#items").append("<td>"+response.items[i].brand+"</td>");
                $("#items").append("<td>"+response.items[i].rooms+"</td>");
                $("#items").append("<td>"+response.items[i].category_id+"</td>");
                $("#items").append("<td>"+response.items[i].name+"</td>");
                $("#items").append('<td><button onclick="delCabin('+response.items[i].id+')">Borrar</button></td>');
                $("#items").append('<td><button onclick="getCabinId('+response.items[i].id+')">Editar</button></td>');
                $("#items").append("</tr>");
            }
                
        },
        error: function(jqXHR, textStatus, errorThrown){

        }
});
}

function delCabin (idItem){
    var dataDel={
        id:idItem,
        
    }
var dataTosend =JSON.stringify(dataDel);

$.ajax({

            dataType: "json",
            data:dataTosend,
            contentType:"application/json",
            url:"https://g61be72711c796d-db202109261839.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/cabin/cabin",
            type:"DELETE",
            success: function(response){
                console.log(response);
            },
            error: function(jqXHR, textStatus, errorThrown){

            }
});
}

function getCabinId (idItem){
    
    $.ajax({

        dataType: "json",
        url:"https://g61be72711c796d-db202109261839.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/cabin/cabin/"+idItem,
        type:"GET",
        success: function(response){
            
            console.log(response);
            var item= response.items[0];
                $("#myId").val(item.id);
                $("#brand").val(item.brand);
                $("#rooms").val(item.rooms);
                $("#category_id").val(item.category_id);
                $("#name").val(item.name);
            
                
        },
        error: function(jqXHR, textStatus, errorThrown){

        }
});
}

function putCabinId (){
    var data={
        id:$("#myId").val(),
        brand:$("#brand").val(),
        rooms:$("#rooms").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    }
var dataTosend =JSON.stringify(data);

$.ajax({

            dataType: "json",
            data:dataTosend,
            contentType:"application/json",
            url:"https://g61be72711c796d-db202109261839.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/cabin/cabin",
            type:"PUT",
            success: function(response){
                console.log(response);
            },
            error: function(jqXHR, textStatus, errorThrown){

            }
});
}
function postMessage (){
    var data={
        id:$("#myId").val(),
        messagetext:$("#message").val(),
    }
//var dataTosend =JSON.stringify(data);

$.ajax({

            dataType: "json",
            data:data,
            url:"https://g61be72711c796d-db202109261839.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
            type:"POST",
            success: function(response){
                console.log(response);
            },
            error: function(jqXHR, textStatus, errorThrown){

            }
});
}

function getMessage (){
    
    $.ajax({

        dataType: "json",
        url:"https://g61be72711c796d-db202109261839.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"GET",
        success: function(response){
            
            for (i = 0; i< response.items.length; i++){
                $("#items").append("<tr>");
                $("#items").append("<td>"+response.items[i].messagetext+"</td>");
                $("#items").append('<td><button onclick="delMessage('+response.items[i].id+')">Borrar</button></td>');
                $("#items").append('<td><button onclick="getMessageId('+response.items[i].id+')">Editar</button></td>');
                $("#items").append("</tr>");
            }
                
        },
        error: function(jqXHR, textStatus, errorThrown){

        }
});
}

function delMessage (idItem){
    var dataDel={
        id:idItem,
        
    }
var dataTosend =JSON.stringify(dataDel);

$.ajax({

            dataType: "json",
            data:dataTosend,
            contentType:"application/json",
            url:"https://g61be72711c796d-db202109261839.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
            type:"DELETE",
            success: function(response){
                console.log(response);
            },
            error: function(jqXHR, textStatus, errorThrown){

            }
});
}

function getMessageId (idItem){
    
    $.ajax({

        dataType: "json",
        url:"https://g61be72711c796d-db202109261839.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message/"+idItem,
        type:"GET",
        success: function(response){
            
            console.log(response);
            var item= response.items[0];
                $("#myId").val(item.id);
                $("#message").val(item.messagetext);
                
        },
        error: function(jqXHR, textStatus, errorThrown){

        }
});
}

function putMessageId (){
    var data={
        id:$("#myId").val(),
        messagetext:$("#message").val(),
        
    }
var dataTosend =JSON.stringify(data);

$.ajax({

            dataType: "json",
            data:dataTosend,
            contentType:"application/json",
            url:"https://g61be72711c796d-db202109261839.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
            type:"PUT",
            success: function(response){
                console.log(response);
            },
            error: function(jqXHR, textStatus, errorThrown){

            }
});
}
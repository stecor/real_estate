$(document).ready(function(){

        // Create an array of houses
        var houses = [
            {price:"$240,199.00",picture:"./images/colonial.jpg",subject:"Rustic House:  <br>3 Bedrooms, 1 Bath, Heated and Garage."},
            {price:"$199,199.00",picture:"./images/contemporary.jpg",subject:"Contemporary House: <br>good sale, Jacuzzi and Hot Tub."},
            {price:"$49,500.00",picture:"./images/cottage.jpg",subject:"Cottage: <br>rustic, wood stove, no water, no heat, grass."},
            {price:"$149,999.00",picture:"./images/ranch.jpg",subject:"Ranch: <br>large barn and stable of horses. Big tractor too."},
            {price:"$499,499.00",picture:"./images/townhouse.jpg",subject:"Townhouse: <br>property in the center of town. Near bus point!!!"}
            ];

            pos=0;
            // House price
            document.getElementById("price").innerHTML="Price: "+houses[pos].price;
            $("#price").addClass("blue");
            $("#price").css("text-align","left");

            // House picture
            document.getElementById("picture").src=houses[pos].picture;

            // House text
            document.getElementById("subject").innerHTML=[pos+1]+": " + houses[pos].subject;
            $("#subject").addClass("border");

    // Previous and next button
            $("#previous").attr("src","./images/arrow-left-black.png");
            $("#next").attr("src","./images/arrow-right-black.png");

    // Previous button
            $("#previous").hover(function(){
            $(this).attr("src", "./images/arrow-left-white.png");
            }, function(){
            $(this).attr("src", "./images/arrow-left-black.png");
            });

    // Next button
            $("#next").hover(function(){
            $(this).attr("src", "./images/arrow-right-white.png");
            }, function(){
            $(this).attr("src", "./images/arrow-right-black.png");
            });

            $("#next").css("float","right");

            $("#next").click(function(){
              if(pos<houses.length-1)
                pos+=1;

                // House price
                document.getElementById("price").innerHTML="Price: " + houses[pos].price;
                $("#price").addClass("blue");


                // House picture
                document.getElementById("picture").src=houses[pos].picture;

                // House text
                document.getElementById("subject").innerHTML=[pos+1]+": "+houses[pos].subject;
                $("#subject").addClass("border");

                if (pos == houses.length-1){
                    pos=-1;
                }
            });

            $("#previous").click(function(){
              if(pos > 0){
                pos-=1;
      }
                // House price
                document.getElementById("price").innerHTML="Price: " + houses[pos].price;
                $("#price").addClass("blue");
                $("#price").css("text-align","left");

                // House picture
                document.getElementById("picture").src=houses[pos].picture;

                // House text
                document.getElementById("subject").innerHTML=[pos+1]+": "+houses[pos].subject;
                $("#subject").addClass("border");

                if (pos==0){
                   pos=5;
                }
            });

            $("#picture").click(function(){

                var data="";

                data +=`<style>
                        table{
                          border-collapse:collapse;
                          margin:auto;
                        }
                        .bord{
                          border:3px solid black;
                          padding: 5px;
                        }
                        .top{
                          background-color:#2F4F4F;
                          color:#fff;
                          text-align:center;
                          font-size:30px;
                          margin:auto;
                          width:560px;
                        }
                        .primary{
                          background-color:#2F4F4F;
                          width:130px;
                          border-radius:3px;
                          color:#fff;
                          margin-top:20px;
                        }
                        </style>

                        <div class='container'>
                        <div class='top'>Real Estate Listings</div>
                        <table>`;

                for(var i=0; i< houses.length;i++){

                    data +="<tr class='bord'>";
                    data+="<td class='bord'><img src='"+houses[i].picture +"' style='width:130; height:70;'/></td>";
                    data+="<td class='bord'>"+ houses[i].subject +"</td>";
                    data+="<td class='bord'>"+ houses[i].price +"</td>";
                    data +="</tr>";
                }

                data +=`<tr>
                        <td><button class='primary' onclick='window.close()'>Close</button></td>
                        <td></td>
                        <td></td>
                        </tr>
                        </table>
                        </div>`;

                var mywindow= window.open("",'mywindow','width=500,height=450');
                mywindow.document.write(data);

            });
});

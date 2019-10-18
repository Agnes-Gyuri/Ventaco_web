$(document).ready(function(){
  var history2 = [
    {
      "id":"100100100",
      "date":"2019-08-10",
      "location":"stoOOOOre1",
      "orders":[
        {
          "product":"item1",
          "quantity":"1",
          "price":"5"
        },
        {
          "product":"item2",
          "quantity":"1",
          "price":"10"
        }
      ]
    },
    {
      "id":"200200200",
      "date":"2019-07-15",
      "location":"store1",
      "orders":[
        {
          "product":"item1",
          "quantity":"1",
          "price":"5"
        },
        {
          "product":"item2",
          "quantity":"1",
          "price":"10"
        }
      ]
    },
    {
      "id":"300300300",
      "date":"2019-07-12",
      "location":"store1",
      "orders":[
        {
          "product":"item1",
          "quantity":"1",
          "price":"5"
        },
        {
          "product":"item2",
          "quantity":"1",
          "price":"10"
        }
      ]
    },
    {
      "id":"400400400",
      "date":"2019-07-10",
      "location":"store1",
      "orders":[
        {
          "product":"item1",
          "quantity":"1",
          "price":"5"
        },
        {
          "product":"item2",
          "quantity":"1",
          "price":"10"
        }
      ]
    },
    {
      "id":"500400400",
      "date":"2019-07-10",
      "location":"store1",
      "orders":[
        {
          "product":"item1",
          "quantity":"1",
          "price":"5"
        },
        {
          "product":"item2",
          "quantity":"1",
          "price":"10"
        }
      ]
    },
    {
      "id":"600400400",
      "date":"2019-07-10",
      "location":"store1",
      "orders":[
        {
          "product":"item1",
          "quantity":"1",
          "price":"5"
        },
        {
          "product":"item2",
          "quantity":"1",
          "price":"10"
        }
      ]
    },
    {
      "id":"700400400",
      "date":"2019-07-10",
      "location":"store1",
      "orders":[
        {
          "product":"item1",
          "quantity":"1",
          "price":"5"
        },
        {
          "product":"item2",
          "quantity":"1",
          "price":"10"
        }
      ]
    },
    {
      "id":"800400400",
      "date":"2019-07-10",
      "location":"store1",
      "orders":[
        {
          "product":"item1",
          "quantity":"1",
          "price":"5"
        },
        {
          "product":"item2",
          "quantity":"1",
          "price":"10"
        }
      ]
    },
    {
      "id":"900400400",
      "date":"2019-07-10",
      "location":"store1",
      "orders":[
        {
          "product":"item1",
          "quantity":"1",
          "price":"5"
        },
        {
          "product":"item2",
          "quantity":"1",
          "price":"10"
        }
      ]
    },
    {
      "id":"100400400",
      "date":"2019-07-10",
      "location":"store1",
      "orders":[
        {
          "product":"item1",
          "quantity":"1",
          "price":"5"
        },
        {
          "product":"item2",
          "quantity":"1",
          "price":"10"
        }
      ]
    }
    ,
    {
      "id":"12300400400",
      "date":"2019-07-10",
      "location":"store1",
      "orders":[
        {
          "product":"item1",
          "quantity":"1",
          "price":"5"
        },
        {
          "product":"item2",
          "quantity":"1",
          "price":"10"
        }
      ]
    },
    {
      "id":"12320400400",
      "date":"2019-07-10",
      "location":"store1",
      "orders":[
        {
          "product":"item1",
          "quantity":"1",
          "price":"5"
        },
        {
          "product":"item2",
          "quantity":"1",
          "price":"10"
        }
      ]
    },
    {
      "id":"4023400",
      "date":"2019-07-10",
      "location":"store1",
      "orders":[
        {
          "product":"item1",
          "quantity":"1",
          "price":"5"
        },
        {
          "product":"item2",
          "quantity":"1",
          "price":"10"
        }
      ]
    },
    {
      "id":"423423424400",
      "date":"2019-07-10",
      "location":"store1",
      "orders":[
        {
          "product":"item1",
          "quantity":"1",
          "price":"5"
        },
        {
          "product":"item2",
          "quantity":"1",
          "price":"10"
        }
      ]
    },
    {
      "id":"40qweqwe400",
      "date":"2019-07-10",
      "location":"store1",
      "orders":[
        {
          "product":"item1",
          "quantity":"1",
          "price":"5"
        },
        {
          "product":"item2",
          "quantity":"1",
          "price":"10"
        }
      ]
    }
  ]

  $.fn.add = function(a, b){
    var a, b, result;
    return result = a + b
  };
  $.fn.product = function(a, b){
    var a, b, result;
    return result = a * b;
  };
  $.fn.calcsubtot = function(ordls){
    var ordls;
    var result = 0;
    $.each(ordls, function(i, val){
      p = val["price"];
      q = val["quantity"];
      result += $.fn.product(p, q)});
    return result
  };
  $.fn.calctot = function(subtot){
    var subtot, tax, result;
    tax = $.fn.product(subtot, 0.13);
    return result = $.fn.add(subtot, tax)
  };
  $.fn.taggen = function(tag, content){
    var tag, content, result;
    result = "<"+tag+">"+content+"</"+tag+">";
    return result
  };
  $.fn.subtablecontents = function(orders){
    var orders, contents="", result;
    header = "<tr><td>PRODUCT</td><td>PRICE</td><td>QUANTITY</td></tr>";
    contents = $.fn.add(contents, header);
    $.each(orders, function(i, item){
      var name = item["product"];
      var pp = item["price"];
      var qq = item["quantity"];
      var line = "<tr><td>"+name+"</td><td>"+pp+"</td><td>"+qq+"</td></tr>";
      contents = $.fn.add(contents, line)});
    var subtot = $.fn.calcsubtot(orders);
    var tax = $.fn.product($.fn.product(subtot,13), 0.01);
    var tot = $.fn.add(subtot, tax);
    foot_1 = "<tr class='table-borderless'><td></td><td>Subtotal</td><td>"+subtot+"</td></tr>";
    foot_2 = "<tr class='table-borderless'><td></td><td>Tax</td><td>"+tax+"</td></tr>";
    foot_3 = "<tr class='table-borderless'><td></td><td>Total</td><td>"+tot+"</td></tr>";
    footer = foot_1+foot_2+foot_3;
    contents = $.fn.add(contents, footer);
    result = $.fn.taggen("td colspan='3'",$.fn.taggen("table class='table table-sm table-bordered bg-light'", $.fn.taggen("tbody", contents)));
    return result
  };

  $.each(history2, function(i, val){
    var tr_sel = "#"+val["id"];
    var loc = val["location"];
    var date = val["date"];
    var subtot = $.fn.calcsubtot(val["orders"]);
    var tot = $.fn.calctot(subtot);

    // collapsed sub row
    var colrow_id = "sub"+val["id"];
    var colcol = "#sub"+val["id"];
    var $colrow = "<tr id="+colrow_id+" class='collapse'"+" data-parent='#history-table'>";

    // clickable main row
    var $tr = "<tr id="+val["id"]+" class='clickable' data-toggle='collapse' data-target=#"+colrow_id+" aria-expanded='false' aria-controls="+colrow_id+">";

    var $td_loc = $.fn.taggen("td", loc);
    var $td_date = $.fn.taggen("td", date);
    var $td_tot = $.fn.taggen("td", tot);

    $('#history-table').append($tr, $colrow);
    $(tr_sel).append($td_loc, $td_date, $td_tot);

    var $col_tb = $.fn.subtablecontents(val["orders"]);
    $(colcol).append($col_tb)
  })
});

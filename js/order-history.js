$(document).ready(function(){
  var history2 = $.get('js/data.json', 'json');

  $.fn.add = function(a, b){
    var a, b, result;
    return result = a + b
  };
  $.fn.product = function(a, b){
    var a, b, result;
    return result = a * b
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
  $.fn.taggen = function(tag, cls="", content){
    var tag, cls, content, result;
    result = "<"+tag+" class="+cls+">"+content+"</"+tag+">";
    return result
  };
  $.fn.subtablecontents = function(orders){
    var orders, contents="", result;
    header = "<tr><td>PRODUCT</td><td>PRICE</td><td>QUANTITY</td></tr>";
    contents = $.fn.add(contents, header);
    $.each(orders, function(i, item){
      var name = item["product"];
      var pp = "$"+item["price"];
      var qq = item["quantity"];
      var line = "<tr><td>"+name+"</td><td>"+pp+"</td><td>"+qq+"</td></tr>";
      contents = $.fn.add(contents, line)});
    var subtot = $.fn.calcsubtot(orders);
    var tax = $.fn.product(subtot, 0.13);
    var tot = $.fn.add(subtot, tax);
    foot_1 = "<tr class='text-right'><td></td><td>SUBTOTAL</td><td>$"+subtot+"</td></tr>";
    foot_2 = "<tr class='text-right'><td></td><td>TAX</td><td>$"+tax+"</td></tr>";
    foot_3 = "<tr class='text-right'><td></td><td>TOTAL</td><td>$"+tot+"</td></tr>";
    footer = foot_1+foot_2+foot_3;
    contents = $.fn.add(contents, footer);
    result = $.fn.taggen("td colspan='3'",$.fn.taggen("table class='table table-bordered bg-light'", $.fn.taggen("tbody", contents)));
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

$(document).ready(function(){
  var order = [
    {
      "id":"100100100",
      "Name":"name1",
      "date":"2019-08-10",
      "orders":
              [{
          "product":"beer1",
          "quantity":"3",
          "price":"5"
        },
        {
          "product":"beer2",
          "quantity":"1",
          "price":"7"
        }]
    },
    {
      "id":"200200200",
      "Name":"name2",
      "date":"2019-07-15",
      "orders":
        [{
          "product":"beer1",
          "quantity":"2",
          "price":"5"
        }]
      },
    {
      "id":"300300300",
      "Name":"name3",
      "date":"2019-07-12",
      "orders":
        [{
          "product":"beer1",
          "quantity":"2",
          "price":"5"
        }]
      },
    {
      "id":"400400400",
      "Name":"name4",
      "date":"2019-07-10",
      "orders":
        [{
          "product":"beer1",
          "quantity":"2",
          "price":"5"
        }]
    }
  ]

$.fn.add = function(a, b){
  var a, b, result
  return result = a + b
}
$.fn.product = function(a, b){
  var a, b, result
  return result = a * b
}
$.fn.calcsubtot = function(ordls){
  var ordls
  var result = 0
  $.each(ordls, function(i, val){
    p = val["price"]
    q = val["quantity"]
    result += $.fn.product(p, q)})
  return result
}
$.fn.calctot = function(subtot){
  var subtot, tax, result
  tax = $.fn.product(subtot, 0.13)
  return result = $.fn.add(subtot, tax)
}
$.fn.taggen = function(tag, content){
  var tag, content, result
  result = "<"+tag+">"+content+"</"+tag+">"
  return result
}


$.fn.subtablecontents = function(order){
  var order, orders= order["orders"], contents="", result
  header = "<tr><td>PRODUCT</td><td>PRICE</td><td>QUANTITY</td></tr>"
  contents = $.fn.add(contents, header)
  $.each(orders, function(i, item){
    var products = item["product"]
    var pp = "$"+item["price"]
    var qq = item["quantity"]
    var line = "<tr><td>"+products+"</td><td>"+pp+"</td><td>"+qq+"</td></tr>"
    contents = $.fn.add(contents, line)})
  var subtot = $.fn.calcsubtot(orders)
  var tax = $.fn.product(subtot, 0.13)
  var tot = $.fn.add(subtot, tax)
  footer = $.fn.but(order["id"])
  contents = $.fn.add(contents, footer)
  result = $.fn.taggen("td colspan='3'",$.fn.taggen("table class='table table-bordered bg-light'", $.fn.taggen("tbody", contents)))
  return result
}

// move the row to the last rows
// need to know the index/lenght of the table
/*
Requires: target row that will be moved, last row of the table
Effects: Return a new table that has moves after the last row of the
        table
Modifies: order table
*/

$.fn.Acceptance=function(target_order, table){



}

// show pop-up that can reason why it is denied.
// if there is reason, it removes the targetted row from the table.

/*
Requires: target row that will be hidden/removed from the table
Effects: As the button is clicked, rejecting reason pop-up will be
        showed up and as the reason chose, the target row(data) will
        be disappear.
Modifies: target row
*/
$.fn.reject=function(id){
  var id
  var order = "#" + id
  var detail = "#sub" + id
var confirm="#rej_confirmed"+id
$(document).on('click', confirm, function(){
  $(order).remove()
  $(detail).remove()
})
}



// creating buttons
// make sure it is connected to Reject and Acceptance
// function

/*
Effects: generating buttons for acceptance/rejection of
        the order.
*/
$.fn.but = function(target){
  var target
  var but_ac = "<td></td><td><Button type='button' class='btn btn-primary'>Accept</Button></td>"
  var but_rej = "<td><Button type='button' class='btn btn-primary' id='rej_modal' data-toggle='modal' data-target='#rej_but_" + target + "'>Reject</Button></td>"
  var result = $.fn.add(but_ac, but_rej)
  return result
}


//Effects: generating reasons why the order is rejected
$.fn.reason = function(contents){
  var contents
  var result = $.fn.taggen("input type = 'radio' name='reas'", contents)
  return result
}

/*
  Effects: create a reject confirmation modal that shows the rejected reasons.
*/
// **cancel button also included in modal in case the client can cancel the rejection**
$.fn.mod = function(order_id){
  var order_id
  var sub_id = "sub" + order_id
  var mod_gen1 = "<div class='modal fade' id='rej_but_" + order_id + "'aria-hidden='true'>"
  var mod_gen2 = "<div class='modal-dialog'>"
  var mod_cont = "<div class='modal-content'>"
  var mod_head = $.fn.taggen('div class="modal-header"', $.fn.taggen('h4', "Cancel Confirmation"))
  var reason1 = $.fn.reason("Out of Stack")
  var reason2 = $.fn.reason("Others")
  var reasons = reason1 + "<br>" + reason2
  var mod_body = $.fn.taggen("div class='modal-body'", reasons)
  var submit = $.fn.taggen("button type='submit' class='btn btn-primary' data-dismiss='modal' id = 'rej_confirmed"+order_id+"'", "Submit")
  var cancel = $.fn.taggen("button type='button' class='btn btn-primary' data-dismiss='modal'", "Cancel")
  var mod_foot = $.fn.taggen("div class='modal-footer'", $.fn.add(submit, cancel))
  var close = "</div></div></div>"
  var result = mod_gen1 + mod_gen2 + mod_cont + mod_head + mod_body + mod_foot + close
  $.fn.reject(order_id)
  return result
}

/*
for now:
1. add all the rows in one var
2. hide/remove from the table using "reject" - done -
3-1. move the row to the last row and change aria-expanded="false".
3-2. make another page/table for accepted orders.

for later:
after the order is accepted, it will have "served" that deletes order from the table and sends it to server
and "cancel/reject" buttons so the clients can reject the order for any reasons.
*/

$.each(order, function(i, val){
  var tr_sel = "#"+val["id"]
  var nam = val["Name"]
  var subtot = $.fn.calcsubtot(val["orders"])
  var tot = $.fn.calctot(subtot)

  // collapsed sub row
  var colrow_id = "sub"+val["id"]
  var colcol = "#"+colrow_id
  var $colrow = "<tr id="+colrow_id+" class='collapse' data-parent='#order-table'>"

  // clickable main row
  var $tr = "<tr id="+val["id"]+" class='clickable' data-toggle='collapse' data-target=#"+colrow_id+" aria-expanded='false' aria-controls="+colrow_id+">"

  var $td_order_num = $.fn.taggen("td", tr_sel)
  var $td_name = $.fn.taggen("td", nam)
  var $td_tot = $.fn.taggen("td", tot)

  $('#order-table').append($tr)
  $(tr_sel).append($td_order_num)
  $(tr_sel).append($td_name)
  $(tr_sel).append($td_tot)

  $('#order-table').append($colrow)
  var $col_tb = $.fn.subtablecontents(val)

  $(colcol).append($col_tb)

  var a = $.fn.mod(val["id"])
  $(a).appendTo("#order-table")
  })




})

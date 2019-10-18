storeDB = {
    "storeId":{
        "storeInfo":{
            "storeName":"store name",
            "address":"store address",
            "zipCode":"store zip code",
            "contactInfo":{
                "phone":"store phone number",
                "email":"store email address",
                "website":"store website"
            }
        },
        // user client cannot access _storeInfo
        "_storeInfo":{
            "merchantNum":"merchant number of the business",
            "ownerContact":{
                "phone":"owner phone number",
                "email":"owner email"
            }
        },
        "category":{
            "categoryId":{
                "catName":"category name",
                "available":"availability of this category",
                "description":"description of this category",
                "items":{
                    "itemId":{
                        "itemName":"name of the item",
                        "available":"item availability",
                        "description":"description of this item",
                        "promotion":"% of discount promotion",
                        "promoDescription":"description of the promotion",
                        "price":"regular price of the item"
                    }
                }
            },
        },
        "transactions": {
            "transactionId": {
                "time":"transaction time",
                "customer":"customer",
                "details": {
                    // refund - negative price item.
                    "item1": {
                        "itemName": "item name",
                        "itemPrice": "item price",
                        "itemQuantity": "item quantity"
                    }

                },
                "adjustment": "any adjustment applied(fixed or percentage)."
            }
        }
    },
};

customerDB={
    "customerId":{
        "customerInfo":{
            "customerName":"customer name",
            "picture":"picture of customer. identify purpose"
        },
        // store client cannot access to _customer_info
        "_customerInfo":{
            "contactInfo":{
                "phone":"customer phone number",
                "email":"customer email"
            },
            "reward":{
                "level":"reward level",
                "exp":"reward point for upgrading reward level",
                "point":"reward points for redeeming rewards."
            }

        },
        "transactions": {
            "transactionId": {
                "time":"transaction time",
                "store":"store",
                "details": {
                    // refund - negative price item.
                    "item1": {
                        "itemName": "item name",
                        "itemPrice": "item price",
                        "itemQuantity": "item quantity"
                    }

                },
                "adjustment": "any adjustment applied(fixed or percentage)."
            }
        }
    },
};

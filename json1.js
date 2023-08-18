var Obj =
{
    type: "div",
    class: "container",
    child: [
        {
            type: "button",
            class: "btn",
            text: "tab1"
        },
        {
            type: "button",
            class: "btn",
            text: "tab2"
        }, {
            type: "img",
            class: "img1",
            src:"data:image/jpeg;base64,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"
       
        },

        {
            type: "div",
            class: "range",
            child: [{
                type: "div",
                class: "sub-range",
                child: [{

                    type: "div",
                    class: "details",
                    child: [{
                        type: "p",
                        class: "text",
                        text: "63%"

                    },
                    {
                        type: "p",
                        class: "text",
                        text: "Generated Leads"
                    }
                    ]
                },
                {
                    type: "div",
                    class: "range-length",
                    child: [{
                        type: "div",
                        class: "red"
                    }]
                }
                ]
            }, {
                type: "div",
                class: "sub-range",
                child: [{

                    type: "div",
                    class: "details",
                    child: [{
                        type: "p",
                        class: "text",
                        text: "32%"

                    },
                    {
                        type: "p",
                        class: "text",
                        text: "Submitted Tickers"
                    }
                    ]
                },
                {
                    type: "div",
                    class: "range-length",
                    child: [{
                        type: "div",
                        class: "green"
                    }]
                }
                ]
            }, {
                type: "div",
                class: "sub-range",
                child: [{

                    type: "div",
                    class: "details",
                    child: [{
                        type: "p",
                        class: "text",
                        text: "71%"

                    },
                    {
                        type: "p",
                        class: "text",
                        text: "Server Allocation"
                    }
                    ]
                },
                {
                    type: "div",
                    class: "range-length",
                    child: [{
                        type: "div",
                        class: "blue"
                    }]
                }
                ]
            }, {
                type: "div",
                class: "sub-range",
                child: [{

                    type: "div",
                    class: "details",
                    child: [{
                        type: "p",
                        class: "text",
                        text: "41%"

                    },
                    {
                        type: "p",
                        class: "text",
                        text: "Generated Leads"
                    }
                    ]
                },
                {
                    type: "div",
                    class: "range-length",
                    child: [{
                        type: "div",
                        class: "yellow"
                    }]
                }
                ]
            }]
        }
    ]

}


function createEle(Obj) {
    let ele = document.createElement(Obj.type);

    if (Obj.class) {
        ele.classList.add(Obj.class);
    }
    if (Obj.src) {
        ele.src = Obj.src;
    }
    if (Obj.text) {
        ele.innerText = Obj.text;
    }

    if (Obj.range) {
        for (let card of Obj.range) {
            ele.appendChild(createEle(range));
        }
    }

    if (Obj.child) {
        for (let child of Obj.child) {
            ele.appendChild(createEle(child));
        }
    }

    return ele;
}

let container = createEle(Obj);

document.body.appendChild(container);
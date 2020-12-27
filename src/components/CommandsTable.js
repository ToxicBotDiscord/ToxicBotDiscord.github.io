import React from 'react'
import { useSnackbar } from 'notistack';

function CommandsTable() {

    var CommandsDetails = require('./commandDetails.json');

    const { enqueueSnackbar, closeSnackbar } = useSnackbar();


    // Copy to clipboard
    const copyToClipboard = (command) =>{
        var toCopy = "tb " + command;

        // toCopy
        var temp =document.createElement("textarea");
        var tempMsg = document.createTextNode(toCopy);
        temp.appendChild(tempMsg);

        document.body.appendChild(temp);
        temp.select();
        document.execCommand("copy");
        document.body.removeChild(temp);
        

        var message = "Copied '"+ toCopy +"' to clipboard.";
        enqueueSnackbar(message, {
            variant: 'success',
          })
    }

    const tableRows = CommandsDetails.map(index => {
        return(
            <div className="table-row" key={index.id} onDoubleClick={ () => copyToClipboard(index.shortCommand)}>
                <div className="every-command-row">
                    {index.name}
                </div>
                <div className="every-command-row">
                    {index.shortCommand}
                </div>
                <div className="every-command-row">
                    {index.longCommand}
                </div>
            </div>
        )
    })

    return (
        <div id="commands" className="main-black-div">

            <h2>Commands</h2>
            <div className="table-header">
                <div className="every-command-row">
                    Name
                </div>
                <div className="every-command-row">
                    Command
                </div>
                <div className="every-command-row">
                    Optional Command
                </div>
            </div>
            {tableRows}
        </div>
    )
}

export default CommandsTable

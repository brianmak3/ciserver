const Db = require('./db'),
    table = 'dbo.clients',
    Fns = require('./functions');
    clientActions = (req, res) => {
        const { action, clientId, client } = req.body;
        switch (action) {
            case 'getClients':
                Db.select().from(table).then(records =>
                    Fns.returnResp(res, records)
                ).catch(e => console.log(e));
                break;
            case 'deleteClient':
                 Db(table).where('Id',clientId).del().then(()=>Fns.returnResp(res,''))
                break;
            case 'addClient':
                Db(table).insert(client).returning('*').then(([resp]) =>
                    Fns.returnResp(res, resp)
                ).catch(e => console.log(e))
                break;
            case 'updateClient':
                Db(table).where('Id',client.Id).update(client).returning('*').then(([resp]) =>
                Fns.returnResp(res, resp)
            ).catch(e => console.log(e))
                 break;
        }

    }
module.exports =  clientActions

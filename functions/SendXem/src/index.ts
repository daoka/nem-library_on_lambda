import { Context, Callback } from 'aws-lambda'
import { NEMLibrary, NetworkTypes, TransactionHttp, TransferTransaction, TimeWindow, Address, XEM, PlainMessage, Account } from 'nem-library'

const PRIVATE_KEY = process.env['PRIVATE_KEY']
const TO_ADDRESS = process.env['TO_ADDRESS']

export function handler(event:any, context:Context, callback: Callback) {
    console.log('send xem ...')
    
    NEMLibrary.bootstrap(NetworkTypes.TEST_NET)
    const account = Account.createWithPrivateKey(PRIVATE_KEY)
    const transactionHttp = new TransactionHttp()
    const transferTransaction = TransferTransaction.create(
        TimeWindow.createWithDeadline(),
        new Address(TO_ADDRESS),
        new XEM(1),
        PlainMessage.create("send from lambda")
    )
    const signedTransaction = account.signTransaction(transferTransaction)
    transactionHttp.announceTransaction(signedTransaction).subscribe(
        x => {
            console.log(x)
            callback(null, x)
        }
    )
}
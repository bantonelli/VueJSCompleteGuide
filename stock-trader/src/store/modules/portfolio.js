export default {
    state: {
        funds: 1000,
        stocks: []
    },
    mutations: {
        'BUY_STOCK' (state, {stockId, quantity, stockPrice}) {
            // Find method will look for a record and return it if match is true
            const record = state.stocks.find(element => element.id == stockId);
            if (record) {
                record.quantity += quantity;
            } else {
                state.stocks.push({
                    id: stockId,
                    quantity: quantity
                });
            }
            state.funds -= stockPrice * quantity;
        },
        'SELL_STOCK' (state, {stockId, quantity, stockPrice}) {
            const record = state.stocks.find(element => element.id == stockId);
            if (record.quantity > quantity) {
                record.quantity -= quantity;
            } else {
                state.stocks.splice(state.stocks.indexOf(record), 1);                
            }
            state.funds += stockPrice * quantity;
        }
    },
    getters: {
        stockPortfolio (state, getters) {
            return state.stocks.map(stock => {
                const record = getters.marketStocks.find(element => marketStock.id == stock.id);
            });
        }
    },
    actions: {
        buyStock({commit}, order) {
            commit('BUY_STOCK', order);
        },
        sellStock({commit}, order) {
            commit('SELL_STOCK', order);            
        }
    }
};
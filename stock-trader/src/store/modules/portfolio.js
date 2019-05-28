export default {
    state: {
        funds: 1000,
        stocks: []
    },
    mutations: {
        'BUY_STOCK' (state, {stockId, quantity, stockPrice}) {
            // Find method will look for a record and return it if match is true
            var quantity = parseInt(quantity)
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
            var quantity = parseInt(quantity);
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
        stockPortfolio (state, getters, rootState) {
            // Getters is the rootGetters 
            return state.stocks.map(stock => {
                // Map our owned stocks to a new record that shows all the stock data 
                // Should show the market price and market name 
                const record = getters.marketStocks.find(marketStock => marketStock.id == stock.id);
                return {
                    id: stock.id,
                    quantity: stock.quantity,
                    name: record.name, 
                    price: record.price
                }
            });
        },
        funds(state) {
            return state.funds;
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
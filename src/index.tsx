import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from "miragejs"
import { App } from './App';

createServer({
  models: {
    genre: Model, 
  },

  seeds(server) {
    server.db.loadData({
      genres: [
				{
					id: 1,
					name: "action",
					title: "Ação"
				},
				{
					id: 2,
					name: "comedy",
					title: "Comédia"
				},
				{
					id: 3,
					name: "documentary",
					title: "Documentário"
				},
				{
					id: 4,
					name: "drama",
					title: "Drama"
				},
				{
					id: 5,
					name: "horror",
					title: "Terror"
				},
				{
					id: 6,
					name: "family",
					title: "Família"
				}
			]
    })
  },

  routes(){
    this.namespace = "api"
    this.get("/genres", () => {
      return this.schema.all("genre")
    })

    this.post("/genres", (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return this.schema.create("genre", data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

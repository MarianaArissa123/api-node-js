const db = require('../database/connection');

module.exports = {
    async listarGeneros(request, response) {
        try {

            const sql = `
          SELECT gen_id, gen_nome, gen_icone FROM generos;

      `;

            const [rows] = await db.query(sql);

            const nRegistros = rows.length;

            return response.status(200).json({
                sucesso: true,
                mensagem: 'Lista de Gêneros',
                nRegistros,
                dados: rows
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    },
    async cadastrarGeneros(request, response) {
        try {

            const { nome, icone } = request.body;

            const sql = `
            INSERT INTO GENEROS (gen_nome, gen_icone)
            VALUES (?, ?)`;

            const values = [nome, icone];

            const [result] = await db.query(sql, values);

            const dados = {
                id:result.insertId,
                nome,
                icone
            };

            return response.status(200).json({
                sucesso: true,
                mensagem: 'Cadastro de Gêneros',
                dados: dados
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    },
    async editarGeneros(request, response) {
        try {
            return response.status(200).json({
                sucesso: true,
                mensagem: 'Alteração no cadastro de Gêneros',
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    },
    async apagarGeneros(request, response) {
        try {
            return response.status(200).json({
                sucesso: true,
                mensagem: 'Exclusão de Gêneros',
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    },
};  
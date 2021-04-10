using EducaMais.Domain;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EducaMais.Repository
{
    public class PessoaRepository : DbGeneric<Pessoa>, IPessoaRepository
    {
        public PessoaRepository(Context context) : base(context) { }

        public async Task DeletarPessoa(int id)
        {
            try
            {
                var pessoa = ObterPessoas().FirstOrDefault(x => x.Id == id);
                
                await Remover(pessoa);
            }
            catch (Exception ex)
            {
                throw new ArgumentException($"Erro ao no repositorio. {ex.Message}");
            }
        }

        public IEnumerable<Pessoa> ObterPessoas()
        {
            try
            {
                var pessoa = Listar();

                return pessoa;
            }
            catch (Exception ex)
            {
                throw new ArgumentException($"Erro ao no repositorio. {ex.Message}");
            }
        }

        public Task<Pessoa> ObterPessoaPorId(int id)
        {
            try
            {
                var pessoa = ListarPorId(id);

                return pessoa;
            }
            catch (Exception ex)
            {
                throw new ArgumentException($"Erro ao no repositorio. {ex.Message}");
            }
        }

        public async Task AlterarPessoa(Pessoa pessoa)
        {
            try
            {
                await Editar(pessoa);
            }
            catch (Exception ex)
            {
                throw new ArgumentException($"Erro ao no repositorio. {ex.Message}");
            }
        }

        public async Task AdicionarPessoa(Pessoa pessoa)
        {
            try
            {
                await Adicionar(pessoa);
            }
            catch (Exception ex)
            {
                throw new ArgumentException($"Erro ao no repositorio. {ex.Message}");
            }
        }
    }
}

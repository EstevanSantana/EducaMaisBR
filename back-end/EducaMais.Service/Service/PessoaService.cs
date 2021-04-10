using EducaMais.Domain;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace EducaMais.Service
{
    public class PessoaService : IPessoaService
    {
        private readonly IPessoaRepository _repository;

        public PessoaService(IPessoaRepository repository)
        {
            _repository = repository;
        }

        public async Task DeletarPessoa(int id)
        {
            try
            {
                if (id.ToString() != null)
                {

                    //var delEndereco = _enderecoService.DeletarEndereco(id);

                    await _repository.DeletarPessoa(id);
                }
            }
            catch (Exception ex)
            {
                throw new ArgumentException($"Erro no no services ao deletar pessoa. {ex.Message} ");
            }
        }

        public IEnumerable<Pessoa> ObterPessoas()
        {
            try
            {
                var pessoa = _repository.ObterPessoas();

                return pessoa;
            }
            catch (Exception ex)
            {
                throw new ArgumentException($"Erro no no services. {ex.Message} ");
            }
        }

        public async Task<Pessoa> ObterPessoaPorId(int id)
        {
            try
            {
                var pessoa = _repository.ObterPessoaPorId(id);
                
                return await pessoa;
            }
            catch (Exception ex)
            {
                throw new ArgumentException($"Erro no no services. {ex.Message} ");
            }
        }

        public async Task AdicionarPessoa(Pessoa pessoa)
        {
            try
            {
                if (pessoa != null)
                {
                    await _repository.AdicionarPessoa(pessoa);
                }
            }
            catch (Exception ex)
            {
                throw new ArgumentException($"Erro no no services ao adicionar pessoa. {ex.Message} ");
            }
        }

        public async Task AlterarPessoa(Pessoa pessoa)
        {
            try
            {
                if (pessoa != null)
                {
                    await _repository.AlterarPessoa(pessoa);
                }
            }
            catch (Exception ex)
            {
                throw new ArgumentException($"Erro no no services ao alterar pessoa. {ex.Message} ");
            }
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EducaMais.Domain
{
    public interface IPessoaRepository 
    {
        IEnumerable<Pessoa> ObterPessoas();
        Task<Pessoa> ObterPessoaPorId(int id);
        Task AdicionarPessoa(Pessoa pessoa);
        Task AlterarPessoa(Pessoa pessoa);
        Task DeletarPessoa(int id);
    }
}

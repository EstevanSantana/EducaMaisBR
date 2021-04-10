using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EducaMais.Repository
{
    public class DbGeneric<TEntity> where TEntity : class
    {
        public readonly Context context;

        public DbGeneric(Context _context)
        {
            context = _context;
        }

        public async Task Adicionar(TEntity item)
        {
            await context.Set<TEntity>().AddAsync(item);
            await context.SaveChangesAsync();
        }

        public async Task Remover(TEntity item)
        {
            context.Set<TEntity>().Remove(item);
            await context.SaveChangesAsync();
        }

        public async Task Editar(TEntity item)
        {
            context.Set<TEntity>().Update(item);
            await context.SaveChangesAsync();
        }

        public IEnumerable<TEntity> Listar()
        {
            return context.Set<TEntity>().ToList();
        }

        public async Task<TEntity> ListarPorId(int id)
        {
            var item = context.Set<TEntity>().FindAsync(id);
            return await item;
        }
    }
}

namespace Clsmap.SeekerAndRetriever.Models
{
    using System;

    public interface IFound
    {
        Guid Id { get; set; }

        IRetriever Retriever { get; set; }
    }
}
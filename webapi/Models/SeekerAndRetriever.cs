using System;
using System.Collections.Generic;

namespace Clsmap.SeekerAndRetriever.Models
{
    public class Seeker : ISeeker
    {
        public Guid Id { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }

        public IThing Seeking { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
    }

    public class Retriever : IRetriever
    {
        public Guid Id { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }

        public IEnumerable<IFound> Retrieved { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
    }
}
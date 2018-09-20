using System;
using System.Collections.Generic;

namespace Clsmap.SeekerAndRetriever.Models
{
    public class Lost : ILost
    {
        public Guid Id { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }

        public ISeeker Seeker { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }

        public IEnumerable<IFound> Foundings { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
        
        public IStatus Status { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
    }
}
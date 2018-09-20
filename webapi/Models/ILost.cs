namespace Clsmap.SeekerAndRetriever.Models
{
    using System;
    using System.Collections.Generic;

    public interface ILost
    {
        Guid Id { get; set; }

        ISeeker Seeker { get; set; }

        IEnumerable<IFound> Foundings { get; set; }

        IStatus Status { get; set; }
    }
}
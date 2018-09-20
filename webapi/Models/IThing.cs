namespace Clsmap.SeekerAndRetriever.Models
{
    using System;
    using System.Collections.Generic;

    public interface IThing
    {
        Guid Id { get; set; }

        IThingDescriptor Descriptor { get; set; }
    }

    public interface IThingDescriptor : IDescriptor
    {
    }
}

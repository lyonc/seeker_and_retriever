namespace Clsmap.SeekerAndRetriever.Models
{
    using System;
    using System.Collections.Generic;

    public interface IFellow
    {
        Guid Id { get; set; }
    }

    public interface IOperator : IFellow
    {

    }

    public class SystemOperator : IOperator
    {
        private Guid _id;

        public Guid Id
        {
            get
            {
                if (_id == null)
                {
                    _id = Guid.NewGuid();
                }

                return _id;
            }
            set
            {
                _id = value;
            }
        }

        public String Name => "System Admin";
    }

    public interface ISeeker : IFellow
    {
        IThing Seeking { get; set; }
    }

    public interface IRetriever : IFellow
    {
        IEnumerable<IFound> Retrieved { get; set; }
    }
}
namespace Clsmap.SeekerAndRetriever.Models
{
    using System;

    public class Status : IStatus
    {
        public virtual IOperator Operator { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }

        public virtual IStatusDescriptor Descriptor { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
    }

    public class CreatedStatus : Status
    {
        
    }

    public class PublishedStatus : Status
    {
        
    }

    public class PublishDeniedStatus : Status
    {
        public override IStatusDescriptor Descriptor => new PublishDeniedDescriptor(Operator);
    }

    public class WithdrawedStatus : Status
    {
        
    }

    public class SeekingStatus : Status
    {
        
    }

    public class FoundSomethingStatus : Status
    {
        
    }

    public class RetrieveredStatus : Status
    {

    }


    public class TimeoutStatus : Status
    {
        
    }


    public static class StatusFactory
    {
        public static Status Create(String name, IOperator ops, String text)
        {
            if (name == "created")
            {
                return new CreatedStatus();
            }

            if (name == "published")
            {
                return new PublishedStatus();
            }

            if (name == "publish_denied")
            {
                return new PublishDeniedStatus();
            }

            if (name == "withdrawed")
            {
                return new WithdrawedStatus();
            }

            if (name == "seeking")
            {
                return new SeekingStatus();
            }

            if (name == "found_something")
            {
                return new FoundSomethingStatus();
            }

            if (name == "retrievered")
            {
                return new RetrieveredStatus();
            }

            if (name == "timeout")
            {
                return new TimeoutStatus();
            }

            throw new NoSuchStatusException(name);
        }
    }

    public class NoSuchStatusException : Exception
    {
        private String _name;

        public NoSuchStatusException(String name)
        {
            this._name = name;
        }

        public override String Message => $"No such stauts, name: {_name}";
    }
}
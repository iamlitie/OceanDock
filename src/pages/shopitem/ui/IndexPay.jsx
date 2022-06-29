import React from 'react'
import { IndexPay as Wrap } from './styled'
import SliderAdd from './SliderAdd'

export default function IndexPay(props) {
    return (
        <Wrap>
            <span>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAA8lJREFUWAnFl8kvbFEQxquvJuYgiIUQMQ8JMS2IMQgLCwvxR1pYSMwRQ1iYQowxBokIghBDTO/51Xv35tKud9vTrRLd1zmn6vvuOXWqvvb8ejX5QTN+EFuhve8JsCHb29uyt7cnZ2dncnd3J6GhoRIXFydpaWmSl5cn4eHh7930//v7e9nY2JCDgwO5vLyUx8dHiYiIkMTERMnIyJCsrCzxeDxvfD32Izg+PpaJiQl1ZhVAkZGR8vDwIDc3NwI5yFRUVEhRUdGbQCsrKzI7O6uggERFRUlYWJjc3t4KxDBeora2VlJSUixfiwBvPTY2Ji8vL8q2rKxMEhISrIXsxOrqqiwuLuqa/Px8qamp0fnJyUlZX18XwzCkpKRECgsL9c1N5/Pzc5mfn9ddZU1DQ4NkZmbqtBI4OTmR3t5eCQkJkerqasnOzjZ9fb7Z2pGRESFoVVWVzk9PTyvZpqYmfUsfp78DW1tbMjU1Jc/Pz9Le3i7JycmiBLq7u+Xi4kIaGxv1nJwCmOMcR09Pj7W1HFVHR4duu7nG6ZudHh0dlfj4eOns7BRjd3dXwdPT012BE5jzbW1tlZiYGP3jmTE3RiKCxQuD7SXbMRLLHyOzu7q6/HGx1oK1v7//JydOT081YewJZ60M0ANYXE+wDa5JdHR0gKCcw4IJ9uutMPRaOS8NzAzXHWyDDOaOB9vABNugOrEVXK1gGVhggm2kpqYq7uHhYbDwxcQC2+BOchbLy8tBIwAWmIpNMaE4UBg2NzcDTgIMsMAEW/UAjYcuR02/uroKGAligwEWmJgSgAlNiLZLo6GPf7cRk9hggAUmZiminJwcyc3NVREyODioHeu7SND9iInAAQMs0ywCDCAWSIyjoyPp6+v7lp3gzYlFTGKDYTdLkJiDsGWraBZJSUna9ajbXzGKzcDAgNZ8wNELaA67+RBgEumFOkJAcFZtbW2fCg17QPMZ4dLf3y/X19cqcOrr6330IGs/JGAGmZubk4WFBdV2iBVEqRtDlCI6SLjS0lIpLy93dPuUAF47OzsyPj6uSVlZWSnFxcWOwZhYWlqSmZkZ3eq6ujpL+zk5/ZMAjmjGoaEhrd/Ia7aTu2w3ko1jQ+CgpFtaWlTz2dd89OyKAI40kOHhYSVDE2lublZdxxyVjTnOHaHJnFuJ5poAQPRwKtna2pp4vV4tKIyjdJ+enqSgoECVMnXerflFwAxKXvADxqyYHAf329T65jo3318iQGDqOvUC437Hxsbqs78fXyYAEPUCe/97Twddfvj8OHXpp8v+B9jE+Q3W5+tsXCx8gQAAAABJRU5ErkJggg==" alt=""/>
                <i>收藏</i>
            </span>
            <span><SliderAdd addCart={props.addCart}></SliderAdd></span>
            <span>立即购买</span>
        </Wrap>
    )
}

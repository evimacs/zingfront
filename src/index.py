def index(s: str, t: str):
    # 题1
    # 算出s和t中共有共有单词的个数，并将单词个数和索引存入dict里面，如果共同单词个数小于2，那么返回None，否则返回count第二大对应index的最小值
    s = s.split()
    t = t.split()
    _ret = dict()

    for x in set(s) & set(t):
        _count = min(s.count(x), t.count(x))
        _ret.setdefault(_count, []).append(s.index(x))
    if len(_ret) < 2:
        return None
    return s[min(sorted(_ret.items(), key=lambda x: x[0], reverse=True)[1])]


def index1(target: int):
    #  题 2
    # 解题思路：1.创建一个列表，从1到target//2+2依次向该列表中添加元素
    #          2.如果列表的元素和等于target,  那么就将该列表加入返回值中
    #          3.如果列表的元素和小于target, 那么向该列表添加比元素最后一个值大1的整数
    #          4.如果列表的元素和大于target，那么就pop掉最左边的元素，直到元素和小于等于target
    rets = list()
    ret = list()
    _target = 0
    for i in range(1, target // 2 + 2):
        _target += i
        rets.append(i)
        if _target > target:
            while _target > target:
                _num = rets.pop(0)
                _target -= _num
            if _target == target:
                ret.append(rets[:])
        elif _target == target:
            ret.append(rets[:])
    return ret
